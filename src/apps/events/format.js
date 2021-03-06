const { candidateMap, calendarMap, originMap } = require('./data')

const timeZoneMap = {
  'Pacific Time (US & Canada)': '-07:00',
  'Mountain Time (US & Canada)': '-06:00',
  'Central Time (US & Canada)': '-05:00',
  'Eastern Time (US & Canada)': '-04:00'
}

module.exports = {
  event: e => {
    return {
      id: e.id,
      url: `http://go.brandnewcongress.org${e.path}`,
      title: e.headline,
      intro: e.intro,
      startTime: new Date(e.start_time).toISOString(),
      endTime: new Date(e.end_time).toISOString(),
      timeZone: e.time_zone,
      timeZoneOffset: timeZoneMap[e.time_zone],
      venue: e.venue,
      candidate: calendarMap[e.calendar_id],
      calendar: e.calendar_id
    }
  }
}
