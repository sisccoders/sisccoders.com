import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../components/Seo";
import { CardRow, createCard } from "../../components/Card";
import { convertDate, weekNumber } from "../../utils/util";

interface Props {
  data: Queries.JoinPageQuery
};

export function Head() {
  return (
    <Seo
      title="Join"
      description="Join SIGPwny, the hacking club at UIUC!"
    />
  )
}

const JoinPage = ({ data }: Props) => {
  const { meetings } = data.allMeeting
  const beginner_tags = ["welcome", "intro", "setup", "beginner"]
  // Find the most recent fall semester that has a beginner tag
  const start_semester = meetings.find((meeting) => {
    return meeting.semester?.toUpperCase().includes("FA") && meeting.tags?.some((tag) => beginner_tags.includes(tag as string))
  })?.semester
  // Filter meetings that match the start semester and have a beginner tag
  const filtered_meetings = meetings.filter((meeting) => {
    return meeting.semester?.toUpperCase() === start_semester && meeting.tags?.some((tag) => beginner_tags.includes(tag as string))
  })
  // Reverse the order of the meetings to be in chronological order
  const get_started_meetings = filtered_meetings.reverse()

  const meeting_cards = get_started_meetings.map((meeting) => (
    createCard({meeting, timezone: meeting.timezone} as CardMeetingProps)
  ))
  const socials = data.site?.siteMetadata?.socialLinks
  const discord_link = socials?.find((social) => social?.name === "Discord")?.url || "https://sigpwny.com/discord"
  return (
    <div className="2xl:px-40">
      <section id="join-title" className="grid gap-x-8 lg:grid-cols-2 py-8">
        <div className="flex flex-col flex-grow pb-4 basis-1/2">
          <h1>Welcome to SIGPwny!</h1>
          <p className="text-3xl mb-0">
            Come learn cybersecurity with 2000+ students, alum, and
            professionals in our Discord server.
          </p>
          <a href={discord_link} target="_blank" rel="noopener noreferrer"
            className="place-self-start font-bold text-xl lg:text-2xl my-3 leading-normal btn-primary"
          >
            Join Discord
          </a>
          <ul className="list-decimal pl-6 pt-2">
            <li>
              By joining, you agree to our club <Link to="/rules/">rules</Link>.
            </li>
            <li>
              If you are affiliated with UIUC, make sure to <a href="https://sigpwny.com/auth" target="_blank" rel="noopener noreferrer">authenticate</a> to
              receive the @uiuc role and access club channels.
            </li>
          </ul>
        </div>
        <StaticImage
          src="./2023-09-07-web-hacking-i.jpg"
          alt="SIGPwny members gather for a web hacking meeting"
          className="rounded-xl pointer-events-none select-none border-surface-100 border-2 basis-1/2"
          placeholder="blurred"
        />
      </section>

      <section id="join-involve" className="py-8">
        <h1>How to Get Involved</h1>
        <div className="grid gap-8 lg:grid-cols-3 pt-4 text-center">
          <div className="panel">
            <h2>Learn</h2>
            <p>
              Attending our weekly meetings is the easiest way to learn
              security and meet others! Watch past meetings and find
              upcoming meetings <Link to="/meetings/">here</Link>.
            </p>
          </div>
          <div className="panel">
            <h2>Compete</h2>
            <p>
              We play in cybersecurity competitions known as CTFs (capture the
              flag). Collaborating as a team lets us learn from each other and
              have fun!
            </p>
          </div>
          <div className="panel">
            <h2>Research</h2>
            <p>
              We have connections with professors and graduate students at <a href="https://spri.engr.illinois.edu/" target="_blank" rel="noopener noreferrer">SPR@I</a>.
              We also support individual projects run by our members.
            </p>
          </div>
        </div>
        <p className="pt-4">
          SIGPwny is open to all - there are no member applications, mandatory
          meetings, or even prerequisite knowledge needed.
        </p>
      </section>

      <section id="join-beginner" className="py-8">
        <h1>Beginner Topics</h1>
        <p>
          Learn the fundamental skills to quickly get into hacking and more
          advanced topics!
        </p>
        <CardRow cards={meeting_cards} maxFour={true} />
      </section>

      <section id="join-leadership" className="py-8">
        <h1>FAQ / Get Involved</h1>
        <p className="mt-4 mb-0">
          Interested in learning more about the club? Want to get involved?

          Check out our <Link to="/faq/">FAQ</Link> or reach out to a helper on
          Discord!
        </p>
      </section>
    </div>
  )
}

export default JoinPage

export const query = graphql`
  query JoinPage {
    site {
      siteMetadata {
        description
        timezone
        socialLinks {
          name
          url
        }
      }
    }
    allMeeting(
      filter: {featured: {eq: true}}
      sort: {time_start: DESC}
    ) {
      meetings: nodes {
        title
        time_start
        time_close
        timezone
        week_number
        image {
          path {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          alt
        }
        semester
        slug
        tags
      }
    }
  }
`