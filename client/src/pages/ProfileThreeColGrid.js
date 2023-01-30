import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "../components/misc/Headings";
import {SectionDescription} from "../components/misc/Typography";
import { ReactComponent as TwitterIcon} from "../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../images/github-icon.svg";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs bg-white`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:bg-white transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Membrii Clubului",
  subheading = "C.S.M Suceava",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards = [
    {
      imageSrc: "https://th.bing.com/th/id/OIP.oUjBuuTolMxfepxff4sNegAAAA?pid=ImgDet&w=450&h=450&rs=1",
      position: "Libero",
      name: "Ovidiu Gherman",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://th.bing.com/th/id/OIP.sjawO-TaBWvxAqPv0Jl1CgHaHa?pid=ImgDet&w=500&h=500&rs=1",
      position: "Setter",
      name: "Turcu Elena",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://production-livingdocs-bluewin-ch.imgix.net/2020/10/7/70d65898-b03d-48c8-b71f-1a574c095a41.jpeg?rect=0%2C41%2C300%2C300&w=994&auto=format",
      position: "Middle Blocker",
      name: "Ovidiu Gherman",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Lead Developer",
      name: "Himali Turn",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://dinamo.blob.core.windows.net/dinamo/Repository/2016/9/08_GNK_Dinamo_330x330.JPG",
      position: "Defensive Specialist",
      name: "Ovidiu Schipor",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Quality Assurance",
      name: "Holo Wo",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
