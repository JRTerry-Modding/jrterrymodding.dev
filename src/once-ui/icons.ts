import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEyeDropper,
  HiInformationCircle,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniQuestionMarkCircle,
  HiMiniUser,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineLink,
} from "react-icons/hi2";

import { FaDiscord, FaGithub } from "react-icons/fa6";

import {
  SiCsswizardry,
  SiCurseforge,
  SiFlutter,
  SiJavascript,
  SiKotlin,
  SiMinecraft,
  SiModrinth,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

import { TiHtml5 } from "react-icons/ti";

import { RiNextjsFill } from "react-icons/ri";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  github: FaGithub,
  modrinth: SiModrinth,
  curseforge: SiCurseforge,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  html: TiHtml5,
  css: SiCsswizardry,
  js: SiJavascript,
  nextjs: RiNextjsFill,
  java: DiJava,
  kotlin: SiKotlin,
  flutter: SiFlutter,
  minecraft: SiMinecraft,
};
