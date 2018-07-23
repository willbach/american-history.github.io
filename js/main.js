$(document).ready(function() {
  var content = getContent().sort( (a, b) => Number(a.date) > Number(b.date) ).reduce( (acc, cur) => {
    if( acc[cur.date.slice(0,4)] === undefined ) {
      acc[cur.date.slice(0,4)] = []
    }
    acc[cur.date.slice(0,4)].push(cur)
    return acc
  }, {})

  for(var year in content) {
    var container = $(`#D${year} .container .space-between-row`)
    content[year].forEach( entry => {
      var date = `${Number(entry.date.slice(6))} ${getMonth(entry.date.slice(4,6))} ${entry.date.slice(0,4)}`
      container.append(`<div class="entry">
        <h4 class="entry-title">${date} ${entry.title}</h4>
        <a class="entry-summary" href="${entry.title.replace(/\s/g, '_')}"><p>${entry.summary}</p></a>
      </div>`)
    })

    



  }
  
  $('.entry').hover( function() {
    $(this).find('.entry-summary').show()
  }, function() {
    $(this).find('.entry-summary').hide()
  })
})

function getMonth(month) {
  var months = { "01": 'Jan', "02": 'Feb', "03": 'Mar', "04": 'Apr', "05": 'May', "06": 'Jun', "07": 'Jul', "08": 'Aug', "09": 'Sep', "10": 'Oct', "11": 'Nov', "12": 'Dec' }
  return months[month] !== undefined ? months[month] : 'NA'
}

function getContent() {
  return [
    {
      "title": "FDR first runs for office",
      "date": "19200101",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200201",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200304",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200412",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200503",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200621",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200711",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200831",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19200901",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19201025",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19201118",
      "summary": "This is a test post that we will use for now"
    },
    {
      "title": "FDR first runs for office",
      "date": "19201206",
      "summary": "This is a test post that we will use for now"
    }
  ]
}
