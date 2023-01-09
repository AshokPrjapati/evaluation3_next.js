import {
  Center,
  Flex,
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Badge,
  Card,
  CardBody,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Navbar from "../Components/Navbar";

const skills = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "GITHUB",
];

const experience = [
  {
    position: "Full Stack WEb Developer",
    organization: "Masai",
    from_to: "July 2022 - Present",
  },
  {
    position: "Quality Assurance Engineer",
    organization: "Peramount Forge and Fitting",
    from: "Oct 2020 - Nov 2021",
  },
];

let data = {
  login: "AshokPrjapati",
  id: 107603976,
  node_id: "U_kgDOBmnoCA",
  avatar_url: "https://avatars.githubusercontent.com/u/107603976?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AshokPrjapati",
  html_url: "https://github.com/AshokPrjapati",
  followers_url: "https://api.github.com/users/AshokPrjapati/followers",
  following_url:
    "https://api.github.com/users/AshokPrjapati/following{/other_user}",
  gists_url: "https://api.github.com/users/AshokPrjapati/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/AshokPrjapati/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/AshokPrjapati/subscriptions",
  organizations_url: "https://api.github.com/users/AshokPrjapati/orgs",
  repos_url: "https://api.github.com/users/AshokPrjapati/repos",
  events_url: "https://api.github.com/users/AshokPrjapati/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/AshokPrjapati/received_events",
  type: "User",
  site_admin: false,
  name: "Ashok Kumar",
  company: "Masai School",
  blog: "ashokprjapati.github.io",
  location: "Pali Rajasthan",
  email: null,
  hireable: null,
  bio: "Solution-driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and problem-solving.",
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 62,
  following: 48,
  created_at: "2022-06-16T05:17:24Z",
  updated_at: "2022-12-28T12:58:50Z",
};

let project = {
  total_count: 14,
  incomplete_results: false,
  items: [
    {
      id: 586780235,
      node_id: "R_kgDOIvmOSw",
      name: "evaluation3_next.js",
      full_name: "AshokPrjapati/evaluation3_next.js",
      private: false,
      owner: {
        login: "AshokPrjapati",
        id: 107603976,
        node_id: "U_kgDOBmnoCA",
        avatar_url: "https://avatars.githubusercontent.com/u/107603976?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/AshokPrjapati",
        html_url: "https://github.com/AshokPrjapati",
        followers_url: "https://api.github.com/users/AshokPrjapati/followers",
        following_url:
          "https://api.github.com/users/AshokPrjapati/following{/other_user}",
        gists_url: "https://api.github.com/users/AshokPrjapati/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/AshokPrjapati/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/AshokPrjapati/subscriptions",
        organizations_url: "https://api.github.com/users/AshokPrjapati/orgs",
        repos_url: "https://api.github.com/users/AshokPrjapati/repos",
        events_url:
          "https://api.github.com/users/AshokPrjapati/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/AshokPrjapati/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/AshokPrjapati/evaluation3_next.js",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js",
      forks_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/forks",
      keys_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/teams",
      hooks_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/hooks",
      issue_events_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/events",
      assignees_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/tags",
      blobs_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/languages",
      stargazers_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/stargazers",
      contributors_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/contributors",
      subscribers_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/subscribers",
      subscription_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/subscription",
      commits_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/merges",
      archive_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/downloads",
      issues_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/labels{/name}",
      releases_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/AshokPrjapati/evaluation3_next.js/deployments",
      created_at: "2023-01-09T08:03:05Z",
      updated_at: "2023-01-09T08:09:23Z",
      pushed_at: "2023-01-09T08:24:01Z",
      git_url: "git://github.com/AshokPrjapati/evaluation3_next.js.git",
      ssh_url: "git@github.com:AshokPrjapati/evaluation3_next.js.git",
      clone_url: "https://github.com/AshokPrjapati/evaluation3_next.js.git",
      svn_url: "https://github.com/AshokPrjapati/evaluation3_next.js",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
      score: 1,
    },
  ],
};

export default function Home({ data, projects }) {
  const bg = useColorModeValue("gray.50", "gray.800");
  console.log(projects);
  let { avatar_url, login, name } = data;
  return (
    <>
      <Head>
        <title>{name} Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Flex gap={"30px"}>
        <Box>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"lg"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                src={avatar_url}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {name}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                @{login}
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                {" "}
                HTML | CSS | JAVASCRIPT | TYPESCRIPT | REACT | REDUX | GITHUB
              </Text>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Link to="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=share_link">
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200",
                    }}
                  >
                    Resume
                  </Button>
                </Link>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>

          <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            {skills.map((s, i) => (
              <Badge key={i} px={2} py={1} bg={bg} fontWeight={"400"}>
                {s}
              </Badge>
            ))}
          </Box>

          <Card
            mt={"10px"}
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            {experience.map((e, i) => (
              <CardBody key={i}>
                <Avatar
                  border={i == 0 ? "3px solid blue" : "none"}
                  name={`${i + 1}`}
                  src=""
                />
                <Box>
                  <Text as="h4">
                    {e.position} at {e.organization}
                  </Text>
                  <Text as="p">{e.from_to}</Text>
                </Box>
              </CardBody>
            ))}
          </Card>
        </Box>
        <Box
          w={"100%"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"lg"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Heading>Projects</Heading>
          <Grid
            mt={"20px 0"}
            templateColumns={{ base: `repeat(1,1fr)`, md: `repeat(2,1fr)` }}
            p={4}
          >
            <Box
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"lg"}
              rounded={"lg"}
              p={6}
            >
              <Text as="h3">{}</Text>
              <Text as="p">{projects.items.full_name}</Text>
              <Flex>
                <Flex justifyContent={"space-between"} p={2}>
                  <Text></Text>
                  <Text></Text>
                </Flex>
                <Text>{projects.language}</Text>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

let username = "AshokPrjapati";

export async function getStaticProps(context) {
  let res = await axios.get(`https://api.github.com/users/${username}`);
  let data = await res.data;
  let res2 = await axios.get(
    `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data2 = await res2.data;
  return {
    props: {
      data: data,
      projects: data2.items,
    }, // will be passed to the page component as props
  };
}
