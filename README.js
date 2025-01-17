const fs = require("fs")
const template = fs.readFileSync("./README.template.md", "utf-8")
const { mentors, teams } = require("./consts")
const DEST_KEY = "[[MENTORES]]"
const mentorsByTeam = {}
Object.values(teams).forEach((team) => {
  mentorsByTeam[team] = []
})
mentors.forEach((mentor) => {
  mentor.teams.forEach((team) => {
    const prevMentors = mentorsByTeam[team]
    mentorsByTeam[team] = [...prevMentors, mentor]
  })
})
const result = Object.keys(mentorsByTeam)
  .map((teamName) => {
    const team = mentorsByTeam[teamName]
    const mentors = team
      .map((mentor) => {
        const { timing, name, image, exp, twitter, discord } = mentor
        return `<td><img width="180" src="${image}"/><br/>
  <sub>🧒 ${name}</sub><br/>
  <sub>⏰ ${timing}</sub><br/>
  <sub>🧪 ${exp}</sub><br/>
  <sub>🤖 ${discord}</sub><br/>
  <sub>🐦 <a href="https://twitter.com/${twitter}">@${twitter}</a></sub></sub></td>
  `
      })
      .join(``)

    return `
## ${teamName} Team
<table>
<tbody>
<tr>
  ${mentors}
</tr>
</tbody>
</table>
  `
  })
  .join(``)

fs.writeFileSync(".//README.md", template.replace(DEST_KEY, result))
