import type { Attribute, Schema } from '@strapi/strapi';

export interface MacroLinkIcons extends Schema.Component {
  collectionName: 'components_macro_link_icons';
  info: {
    displayName: 'LinkIcons';
  };
  attributes: {
    icons_mobile: Attribute.String & Attribute.Required;
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

export interface MicroLink extends Schema.Component {
  collectionName: 'components_micro_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.Text & Attribute.Required;
    is_external: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self']> & Attribute.Required;
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
    displayName: 'stack';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    icons: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
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
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
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
      'macro.link-icons': MacroLinkIcons;
      'micro.cta': MicroCta;
      'micro.link': MicroLink;
      'micro.short-text': MicroShortText;
      'micro.stack': MicroStack;
      'micro.ticket-answer': MicroTicketAnswer;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
