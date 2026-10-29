import { GENIA } from "@/data/Profiles/GENIA/GENIA";
import { profileContent } from "@/data/Profiles/GENIA/content";
import {
  getProjectItem,
  getWorkItem,
  projectItems,
  workItems,
} from "@/data/Profiles/GENIA/portfolio";

/** Select the profile rendered by the portfolio pages. */
export const activeProfile = {

  ...profileContent,
  ...GENIA,
  workItems,
  projectItems,
};

export { getProjectItem, getWorkItem };
export type { PortfolioCase } from "@/data/Profiles/GENIA/portfolio";
