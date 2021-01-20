import React from 'react';
import AntdIcon from '@ant-design/icons';
import styled from 'styled-components';

import {
  HomeworkIcon,
  CheatSheetIcon,
  DuckIcon,
  FeatherIcon,
  DeveloperIcon,
  RecruiterIcon,
  MentorIcon,
  DotIcon,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  LinkedinIcon,
  QuoteIcon,
  BehanceIcon,
  DribbleIcon,
  InstagramIcon,
  GitHubIcon,
  GirlPillIcon,
  BoyPillIcon,
  CodementorIcon,
  CallIcon,
  SupportIcon,
  BuildIcon,
  GroupIcon,
  IndividualIcon,
  InsightsIcon,
  KindnessIcon,
  KnowledgeIcon,
  PathIcon,
  ProgressIcon,
  SupportMentorIcon,
  AlgorithmsIcon,
  BrainstormIcon,
  InterviewIcon,
  LogicIcon,
  PracticeIcon,
  ResumeIcon,
  TheoryIcon,
  AntDesignIcon,
  AppleIcon,
  AxiosIcon,
  CssIcon,
  CypressIcon,
  EslintIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GatsbyIcon,
  GitIcon,
  GraphqlIcon,
  HotjarIcon,
  HtmlIcon,
  ItermIcon,
  JestIcon,
  JiraIcon,
  JsIcon,
  JssIcon,
  LaunchdarklyIcon,
  MaterialuiIcon,
  MongodbIcon,
  NetlifyIcon,
  NextIcon,
  NodeIcon,
  NxdevIcon,
  PhaserIcon,
  PostgresqlIcon,
  PrettierIcon,
  ReactIcon,
  ReduxIcon,
  SentryIcon,
  StorybookIcon,
  StyledcomponentsIcon,
  TypescriptIcon,
  VscodeIcon,
  WebpackIcon,
  YarnIcon,
  ZeplinIcon,
  CssTagIcon,
  HtmlTagIcon,
  ImproveTagIcon,
  JsTagIcon,
  ReactTagIcon,
  ToolsTagIcon,
  UxuiTagIcon,
} from '~svg';

const Holder = styled(AntdIcon)(({ width = 32 }) => ({
  '& svg': {
    width,
    maxWidth: width,
    height: 'auto',
  },
}));

const ICON_MAPPER = {
  homework: HomeworkIcon,
  cheatSheet: CheatSheetIcon,
  duck: DuckIcon,
  feather: FeatherIcon,
  developer: DeveloperIcon,
  recruiter: RecruiterIcon,
  mentor: MentorIcon,
  dot: DotIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  reddit: RedditIcon,
  linkedin: LinkedinIcon,
  quote: QuoteIcon,
  behance: BehanceIcon,
  dribble: DribbleIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  girlPill: GirlPillIcon,
  boyPill: BoyPillIcon,
  codementor: CodementorIcon,
  call: CallIcon,
  support: SupportIcon,
  build: BuildIcon,
  group: GroupIcon,
  individual: IndividualIcon,
  insights: InsightsIcon,
  kindness: KindnessIcon,
  knowledge: KnowledgeIcon,
  path: PathIcon,
  progress: ProgressIcon,
  supportMentor: SupportMentorIcon,
  algorithms: AlgorithmsIcon,
  brainstorm: BrainstormIcon,
  interview: InterviewIcon,
  logic: LogicIcon,
  practice: PracticeIcon,
  resume: ResumeIcon,
  theory: TheoryIcon,
  antdesign: AntDesignIcon,
  apple: AppleIcon,
  axios: AxiosIcon,
  css: CssIcon,
  cypress: CypressIcon,
  eslint: EslintIcon,
  express: ExpressIcon,
  figma: FigmaIcon,
  firebase: FirebaseIcon,
  gatsby: GatsbyIcon,
  git: GitIcon,
  graphql: GraphqlIcon,
  hotjar: HotjarIcon,
  html: HtmlIcon,
  iterm: ItermIcon,
  jest: JestIcon,
  jira: JiraIcon,
  javascript: JsIcon,
  jss: JssIcon,
  launchdarkly: LaunchdarklyIcon,
  materialui: MaterialuiIcon,
  mongodb: MongodbIcon,
  netlify: NetlifyIcon,
  next: NextIcon,
  node: NodeIcon,
  nxdev: NxdevIcon,
  phaser: PhaserIcon,
  postgresql: PostgresqlIcon,
  prettier: PrettierIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  sentry: SentryIcon,
  storybook: StorybookIcon,
  styledcomponents: StyledcomponentsIcon,
  typescript: TypescriptIcon,
  vscode: VscodeIcon,
  webpack: WebpackIcon,
  yarn: YarnIcon,
  zeplin: ZeplinIcon,
  cssTag: CssTagIcon,
  htmlTag: HtmlTagIcon,
  improveTag: ImproveTagIcon,
  jsTag: JsTagIcon,
  reactTag: ReactTagIcon,
  toolsTag: ToolsTagIcon,
  uxuiTag: UxuiTagIcon,
};

export const Icon = ({ type, ...props }) => {
  return <Holder component={ICON_MAPPER[type]} {...props} />;
};
