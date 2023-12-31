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
      description="Join Coders Club, the Coding club at SISC!"
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
  const discord_link = socials?.find((social) => social?.name === "Discord")?.url || "https://discord.gg/ZnxdrH9k5y"
  return (
    <div className="2xl:px-40">
      <section id="join-title" className="grid gap-x-8 lg:grid-cols-2 py-8">
        <div className="flex flex-col flex-grow pb-4 basis-1/2">
          <h1>Welcome to SISC Coders!</h1>
          <p className="text-3xl mb-0">
            Come learn coding with 20+ in our biweekly meetings. Join our <a href={discord_link} target="_blank" rel="noopener noreferrer">Discord</a>&nbsp; 
            for tons of opportunities and resources.
          </p>
          <a href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSev8mHlyDk_jyPd1YT1Nx7tVk1EGmUGqKIbmNF8RsfCR0l73w/viewform" target="_blank" rel="noopener noreferrer"
            className="place-self-start font-bold text-xl lg:text-2xl my-3 leading-normal btn-primary"
          >
            Sign up here
          </a>
          <ul className="list-decimal pl-6 pt-2">
            <li>
              By joining, you agree to our club <Link to="/rules/">rules</Link>.
            </li>
          </ul>
        </div>
        <StaticImage
          src="./meeting.png"
          alt="Coders Club Meeting"
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
              coding and meet others! Watch past meetings and find
              upcoming meetings <Link to="/meetings/">here</Link>.
            </p>
          </div>
          <div className="panel">
            <h2>Compete</h2>
            <p>
              We provide opportunities such as hackathons and competitions in our <a href={discord_link} target="_blank" rel="noopener noreferrer">Discord</a>. Feel free to join
              these events not just to boost your resume, but more importantly to improve your skills.
            </p>
          </div>
          <div className="panel">
            <h2>Collaborate</h2>
            <p>
              Our club philosophy is to foster an environment of students with common passion. We strongly
              encourage you to collaborate with other members in solving problem sets or initiating projects.
            </p>
          </div>
        </div>
        <p className="pt-4">
          SISC Coders is open to all Southville students - simply apply through the sign up form above.
        </p>
      </section>

      <section id="join-beginner" className="py-8">
        <h1>Past Meetings</h1>
        <p>
          Check our club's past meetings.
        </p>
        <CardRow cards={meeting_cards} maxFour={true} />
      </section>

      <section id="join-leadership" className="py-8">
        <h1>FAQs</h1>
        <p className="mt-4 mb-0">
          Interested in learning more about the club?

          Check out our <Link to="/faq/">FAQ</Link> or reach out to a leader on
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