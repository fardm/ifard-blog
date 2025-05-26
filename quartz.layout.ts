import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Backlinks(),
    Component.TagList(),
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'fardm/quartz',
        repoId: 'R_kgDOL-drYg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOL-drYs4ChaaZ',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "telegram": "https://t.me/ifard_ir/",
      "x": "https://twitter.com/ifard_ir/",
      "github": "https://github.com/fardm",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Component.ConditionalRender({
    //   component: Component.ContentMeta({ showReadingTime: false, showComma: false }),
    //   condition: (page) => page.fileData.slug !== "index",
    // }),
    Component.ConditionalRender({
      component: Component.Properties({ showReadingTime: false, showComma: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.FloatingButtons(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [
    Component.Graph(),
    Component.FloatingButtons(),
  ],
}
