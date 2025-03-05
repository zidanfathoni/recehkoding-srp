import type { Attribute, Schema } from '@strapi/strapi';

export interface ContentBlogDetail extends Schema.Component {
  collectionName: 'components_content_blog_details';
  info: {
    displayName: 'blog-detail';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ContentContentBase extends Schema.Component {
  collectionName: 'components_content_content_bases';
  info: {
    displayName: 'content-base';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ContentPortfolioDetail extends Schema.Component {
  collectionName: 'components_content_portfolio_details';
  info: {
    displayName: 'portfolio-detail';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    end_date: Attribute.Date & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
    stacks: Attribute.Relation<
      'content.portfolio-detail',
      'oneToMany',
      'api::stack.stack'
    >;
    start_date: Attribute.Date & Attribute.Required;
    tags: Attribute.Relation<
      'content.portfolio-detail',
      'oneToMany',
      'api::tag.tag'
    >;
  };
}

export interface ContentTutorialDetail extends Schema.Component {
  collectionName: 'components_content_tutorial_details';
  info: {
    displayName: 'tutorial-detail';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    creator: Attribute.Relation<
      'content.tutorial-detail',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    pricing: Attribute.Component<'micro.pricing'> & Attribute.Required;
    references: Attribute.Component<'micro.link', true> & Attribute.Required;
  };
}

export interface MacroLinkIcons extends Schema.Component {
  collectionName: 'components_macro_link_icons';
  info: {
    description: '';
    displayName: 'LinkIcons';
  };
  attributes: {
    icons_web: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    link: Attribute.Component<'micro.link'>;
  };
}

export interface MicroCta extends Schema.Component {
  collectionName: 'components_micro_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'micro.link'>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'disable']> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MicroFeatures extends Schema.Component {
  collectionName: 'components_micro_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    included: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    name: Attribute.String & Attribute.Required;
  };
}

export interface MicroHeader extends Schema.Component {
  collectionName: 'components_micro_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'disable']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MicroLink extends Schema.Component {
  collectionName: 'components_micro_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Attribute.Text & Attribute.Required;
    is_external: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self']> & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'disable']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface MicroPlatform extends Schema.Component {
  collectionName: 'components_micro_platforms';
  info: {
    displayName: 'platform';
  };
  attributes: {
    link: Attribute.Text & Attribute.Required;
    platform: Attribute.Enumeration<
      ['instagram', 'tiktok', 'youtube', 'twitter', 'zoom', 'google meet']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'tiktok'>;
    status: Attribute.Enumeration<['active', 'inactive']> &
      Attribute.Required &
      Attribute.DefaultTo<'active'>;
  };
}

export interface MicroPoint extends Schema.Component {
  collectionName: 'components_micro_points';
  info: {
    displayName: 'point';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MicroPricing extends Schema.Component {
  collectionName: 'components_micro_pricings';
  info: {
    description: '';
    displayName: 'pricing';
  };
  attributes: {
    price: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    status: Attribute.Enumeration<['free', 'premium']> &
      Attribute.Required &
      Attribute.DefaultTo<'free'>;
  };
}

export interface MicroShortText extends Schema.Component {
  collectionName: 'components_micro_short_texts';
  info: {
    displayName: 'short_text';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface MicroStack extends Schema.Component {
  collectionName: 'components_micro_stacks';
  info: {
    description: '';
    displayName: 'stack';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    icons: Attribute.Media<'images'> & Attribute.Required;
    reacticon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MicroTeamTask extends Schema.Component {
  collectionName: 'components_micro_team_tasks';
  info: {
    displayName: 'team-task';
  };
  attributes: {
    deadline: Attribute.DateTime & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    notes: Attribute.Text & Attribute.Required;
    percentage: Attribute.Decimal & Attribute.Required;
    priority: Attribute.Enumeration<['low', 'medium', 'high']> &
      Attribute.Required;
    status: Attribute.Enumeration<
      ['to do', 'on progress', 'on review', 'done', 'cancelled']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'to do'>;
    users_permissions_user: Attribute.Relation<
      'micro.team-task',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface MicroTicketAnswer extends Schema.Component {
  collectionName: 'components_micro_ticket_answers';
  info: {
    displayName: 'ticket-answer';
  };
  attributes: {
    answer: Attribute.Text & Attribute.Required;
    role: Attribute.Enumeration<['admin', 'user']> &
      Attribute.Required &
      Attribute.DefaultTo<'user'>;
  };
}

export interface PagePageItem extends Schema.Component {
  collectionName: 'components_page_page_items';
  info: {
    displayName: 'page-item';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    name: Attribute.String & Attribute.Required;
  };
}

export interface PagePageSubItem extends Schema.Component {
  collectionName: 'components_page_page_sub_items';
  info: {
    description: '';
    displayName: 'page-sub-item';
  };
  attributes: {
    item: Attribute.Component<'micro.link'>;
    items: Attribute.Component<'micro.link', true>;
  };
}

export interface SharedCookieButton extends Schema.Component {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'Tiktok']
    > &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.blog-detail': ContentBlogDetail;
      'content.content-base': ContentContentBase;
      'content.portfolio-detail': ContentPortfolioDetail;
      'content.tutorial-detail': ContentTutorialDetail;
      'macro.link-icons': MacroLinkIcons;
      'micro.cta': MicroCta;
      'micro.features': MicroFeatures;
      'micro.header': MicroHeader;
      'micro.link': MicroLink;
      'micro.platform': MicroPlatform;
      'micro.point': MicroPoint;
      'micro.pricing': MicroPricing;
      'micro.short-text': MicroShortText;
      'micro.stack': MicroStack;
      'micro.team-task': MicroTeamTask;
      'micro.ticket-answer': MicroTicketAnswer;
      'page.page-item': PagePageItem;
      'page.page-sub-item': PagePageSubItem;
      'shared.cookie-button': SharedCookieButton;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
