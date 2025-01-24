import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiBannerBanner extends Schema.SingleType {
  collectionName: 'banners';
  info: {
    displayName: 'banner';
    pluralName: 'banners';
    singularName: 'banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    images: Attribute.Media<'images', true> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory extends Schema.CollectionType {
  collectionName: 'blog_categories';
  info: {
    displayName: 'blog-category';
    pluralName: 'blog-categories';
    singularName: 'blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::blog-category.blog-category', 'title'> &
      Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-category.blog-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_category: Attribute.Relation<
      'api::blog.blog',
      'oneToOne',
      'api::blog-category.blog-category'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    detail: Attribute.Component<'content.blog-detail'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'> & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    tags: Attribute.Relation<'api::blog.blog', 'oneToMany', 'api::tag.tag'>;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    description: '';
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    endDate: Attribute.DateTime & Attribute.Required;
    platform: Attribute.Component<'micro.platform'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    startDate: Attribute.DateTime & Attribute.Required;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Webinar', 'Class', 'Meet Up', 'Chill']> &
      Attribute.Required &
      Attribute.DefaultTo<'Webinar'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'faq';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Attribute.Text & Attribute.Required;
    category: Attribute.Enumeration<
      ['Getting Started', 'Billing', 'Pricing', 'Support']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Getting Started'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    icons: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    publishedAt: Attribute.DateTime;
    question: Attribute.Text & Attribute.Required & Attribute.Unique;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::faq.faq', 'question'> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFeatureFeature extends Schema.CollectionType {
  collectionName: 'features';
  info: {
    displayName: 'Feature';
    pluralName: 'features';
    singularName: 'feature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feature.feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    icons: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::feature.feature', 'title'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::feature.feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMeMe extends Schema.SingleType {
  collectionName: 'us';
  info: {
    description: '';
    displayName: 'me';
    pluralName: 'us';
    singularName: 'me';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avatar: Attribute.Media<'images'> & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::me.me', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    fullname: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::me.me', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String & Attribute.Required;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    description: '';
    displayName: 'page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::page.page', 'name'> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPortfolioPortfolio extends Schema.CollectionType {
  collectionName: 'portfolios';
  info: {
    description: '';
    displayName: 'Portfolio';
    pluralName: 'portfolios';
    singularName: 'portfolio';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::portfolio.portfolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    detail: Attribute.Component<'content.portfolio-detail'> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::portfolio.portfolio', 'title'> &
      Attribute.Required;
    status: Attribute.Enumeration<['pending', 'progress', 'completed']> &
      Attribute.Required &
      Attribute.DefaultTo<'pending'>;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['personal', 'team']> &
      Attribute.Required &
      Attribute.DefaultTo<'personal'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::portfolio.portfolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPricing extends Schema.CollectionType {
  collectionName: 'pricings';
  info: {
    description: '';
    displayName: 'pricing';
    pluralName: 'pricings';
    singularName: 'pricing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    features: Attribute.Component<'micro.features', true> & Attribute.Required;
    highlight: Attribute.Boolean;
    icons: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    priceAnnualy: Attribute.Integer & Attribute.Required;
    priceMonthly: Attribute.Integer & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pricing.pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    uuid: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface ApiProfileTeamProfileTeam extends Schema.SingleType {
  collectionName: 'profile_teams';
  info: {
    displayName: 'profile-team';
    pluralName: 'profile-teams';
    singularName: 'profile-team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::profile-team.profile-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::profile-team.profile-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users_permissions_users: Attribute.Relation<
      'api::profile-team.profile-team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiProfileProfile extends Schema.SingleType {
  collectionName: 'profiles';
  info: {
    description: '';
    displayName: 'profile';
    pluralName: 'profiles';
    singularName: 'profile';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    address: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    coreValues: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    founded: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    founder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    industry: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    latlong: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::profile.profile',
      'oneToMany',
      'api::profile.profile'
    >;
    logo: Attribute.Media<'images'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mission: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    phone: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    tagline: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vision: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    website: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiQuickLinkQuickLink extends Schema.SingleType {
  collectionName: 'quick_links';
  info: {
    description: '';
    displayName: 'quick-link';
    pluralName: 'quick-links';
    singularName: 'quick-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quick-link.quick-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    links: Attribute.Component<'micro.link', true> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    social: Attribute.Component<'macro.link-icons', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::quick-link.quick-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSkillSkill extends Schema.CollectionType {
  collectionName: 'skills';
  info: {
    displayName: 'skill';
    pluralName: 'skills';
    singularName: 'skill';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    level: Attribute.Enumeration<
      ['beginner', 'intermediate', 'advanced', 'expert']
    > &
      Attribute.Required;
    percentage: Attribute.Float & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    stack: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'api::stack.stack'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users_permissions_user: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiStackStack extends Schema.CollectionType {
  collectionName: 'stacks';
  info: {
    description: '';
    displayName: 'stack';
    pluralName: 'stacks';
    singularName: 'stack';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stack.stack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    icons_svg: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::stack.stack', 'title'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::stack.stack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStuckStuck extends Schema.CollectionType {
  collectionName: 'stucks';
  info: {
    description: '';
    displayName: 'stuck';
    pluralName: 'stucks';
    singularName: 'stuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Component<'content.content-base'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stuck.stuck',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    images: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    tag: Attribute.Relation<'api::stuck.stuck', 'oneToOne', 'api::tag.tag'>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::stuck.stuck',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubscribeSubscribe extends Schema.CollectionType {
  collectionName: 'subscribes';
  info: {
    description: '';
    displayName: 'subscribe';
    pluralName: 'subscribes';
    singularName: 'subscribe';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subscribe.subscribe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email & Attribute.Required;
    is_active: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    name: Attribute.String & Attribute.DefaultTo<'users'>;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::subscribe.subscribe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    displayName: 'tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::tag.tag', 'title'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.CollectionType {
  collectionName: 'teams';
  info: {
    description: '';
    displayName: 'team';
    pluralName: 'teams';
    singularName: 'team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    goal: Attribute.Text & Attribute.Required;
    portfolios: Attribute.Relation<
      'api::team.team',
      'oneToMany',
      'api::portfolio.portfolio'
    >;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::team.team', 'title'> & Attribute.Required;
    stacks: Attribute.Relation<
      'api::team.team',
      'oneToMany',
      'api::stack.stack'
    >;
    status: Attribute.Enumeration<['active', 'inactive']> & Attribute.Required;
    task: Attribute.Component<'micro.team-task', true>;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users_permissions_users: Attribute.Relation<
      'api::team.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    job: Attribute.String & Attribute.Required;
    link: Attribute.Component<'micro.link'>;
    message: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::testimonial.testimonial', 'title'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketTicket extends Schema.CollectionType {
  collectionName: 'tickets';
  info: {
    description: '';
    displayName: 'ticket';
    pluralName: 'tickets';
    singularName: 'ticket';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Attribute.Component<'micro.ticket-answer', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email & Attribute.Required;
    message: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    status: Attribute.Enumeration<['pending', 'hold', 'progress', 'done']> &
      Attribute.Required &
      Attribute.DefaultTo<'pending'>;
    subject: Attribute.Text & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users_permissions_user: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    uuid: Attribute.UID &
      Attribute.Required &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface ApiToolTool extends Schema.CollectionType {
  collectionName: 'tools';
  info: {
    displayName: 'tool';
    pluralName: 'tools';
    singularName: 'tool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tool.tool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'macro.link-icons'>;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::tool.tool', 'title'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'Environmental',
        'Management',
        'Service',
        'Technology',
        'Mobile Apps',
        'Front-end',
        'Back-end',
        'AI'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Environmental'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::tool.tool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTutorialCategoryTutorialCategory
  extends Schema.CollectionType {
  collectionName: 'tutorial_categories';
  info: {
    displayName: 'tutorial-category';
    pluralName: 'tutorial-categories';
    singularName: 'tutorial-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tutorial-category.tutorial-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::tutorial-category.tutorial-category', 'title'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::tutorial-category.tutorial-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTutorialTutorial extends Schema.CollectionType {
  collectionName: 'tutorials';
  info: {
    description: '';
    displayName: 'tutorial';
    pluralName: 'tutorials';
    singularName: 'tutorial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    count: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    detail: Attribute.Component<'content.tutorial-detail'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'> & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::tutorial.tutorial', 'title'> & Attribute.Required;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    tutorial_categories: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToMany',
      'api::tutorial-category.tutorial-category'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZidanfathProjectZidanfathProject
  extends Schema.CollectionType {
  collectionName: 'zidanfath_projects';
  info: {
    description: '';
    displayName: 'zidanfath-project';
    pluralName: 'zidanfath-projects';
    singularName: 'zidanfath-project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zidanfath-project.zidanfath-project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date;
    description: Attribute.Text & Attribute.Required;
    detail: Attribute.Component<'content.blog-detail'> & Attribute.Required;
    images: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Text & Attribute.DefaultTo<'#'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'> & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::zidanfath-project.zidanfath-project', 'title'>;
    stacks: Attribute.Relation<
      'api::zidanfath-project.zidanfath-project',
      'oneToMany',
      'api::stack.stack'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::zidanfath-project.zidanfath-project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentsComment extends Schema.CollectionType {
  collectionName: 'comments_comment';
  info: {
    description: 'Comment content type';
    displayName: 'Comment';
    kind: 'collectionType';
    pluralName: 'comments';
    singularName: 'comment';
    tableName: 'plugin-comments-comments';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    approvalStatus: Attribute.String;
    authorAvatar: Attribute.String;
    authorEmail: Attribute.Email;
    authorId: Attribute.String;
    authorName: Attribute.String;
    authorUser: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockedThread: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockReason: Attribute.String;
    content: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    isAdminComment: Attribute.Boolean;
    related: Attribute.String;
    removed: Attribute.Boolean;
    reports: Attribute.Relation<
      'plugin::comments.comment',
      'oneToMany',
      'plugin::comments.comment-report'
    >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    threadOf: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::comments.comment'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentsCommentReport extends Schema.CollectionType {
  collectionName: 'comments_comment-report';
  info: {
    description: 'Reports content type';
    displayName: 'Reports';
    kind: 'collectionType';
    pluralName: 'comment-reports';
    singularName: 'comment-report';
    tableName: 'plugin-comments-reports';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    reason: Attribute.Enumeration<['BAD_LANGUAGE', 'DISCRIMINATION', 'OTHER']> &
      Attribute.Required &
      Attribute.DefaultTo<'OTHER'>;
    related: Attribute.Relation<
      'plugin::comments.comment-report',
      'manyToOne',
      'plugin::comments.comment'
    >;
    resolved: Attribute.Boolean & Attribute.DefaultTo<false>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEmailDesignerEmailTemplate
  extends Schema.CollectionType {
  collectionName: 'email_templates';
  info: {
    displayName: 'Email-template';
    name: 'email-template';
    pluralName: 'email-templates';
    singularName: 'email-template';
  };
  options: {
    comment: '';
    draftAndPublish: false;
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    bodyHtml: Attribute.Text;
    bodyText: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    design: Attribute.JSON;
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    name: Attribute.String;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    subject: Attribute.String;
    tags: Attribute.JSON;
    templateReferenceId: Attribute.Integer & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsRecipient extends Schema.CollectionType {
  collectionName: 'ezforms_recipient';
  info: {
    description: 'List of Notification Recipients';
    displayName: 'Notification Recipients';
    kind: 'collectionType';
    pluralName: 'recipients';
    singularName: 'recipient';
    tableName: 'recipients';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    number: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsSubmission extends Schema.CollectionType {
  collectionName: 'ezforms_submission';
  info: {
    description: 'A Place for all your form submissions';
    displayName: 'Form Submissions';
    kind: 'collectionType';
    pluralName: 'submissions';
    singularName: 'submission';
    tableName: 'submission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    data: Attribute.JSON;
    formName: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    score: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenu extends Schema.CollectionType {
  collectionName: 'menus';
  info: {
    displayName: 'Menu';
    name: 'Menu';
    pluralName: 'menus';
    singularName: 'menu';
    tableName: 'menus';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    items: Attribute.Relation<
      'plugin::menus.menu',
      'oneToMany',
      'plugin::menus.menu-item'
    >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID<'plugin::menus.menu', 'title'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenuItem extends Schema.CollectionType {
  collectionName: 'menu_items';
  info: {
    displayName: 'Menu Item';
    name: 'MenuItem';
    pluralName: 'menu-items';
    singularName: 'menu-item';
    tableName: 'menu_items';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    order: Attribute.Integer;
    parent: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'plugin::menus.menu-item'
    >;
    root_menu: Attribute.Relation<
      'plugin::menus.menu-item',
      'manyToOne',
      'plugin::menus.menu'
    > &
      Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    target: Attribute.Enumeration<['_blank', '_parent', '_self', '_top']>;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String;
  };
}

export interface PluginNavigationAudience extends Schema.CollectionType {
  collectionName: 'audience';
  info: {
    displayName: 'Audience';
    name: 'audience';
    pluralName: 'audiences';
    singularName: 'audience';
  };
  options: {
    comment: 'Audience';
    increments: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    key: Attribute.UID<'plugin::navigation.audience', 'name'>;
    name: Attribute.String & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations';
  info: {
    displayName: 'Navigation';
    name: 'navigation';
    pluralName: 'navigations';
    singularName: 'navigation';
  };
  options: {
    comment: '';
    increments: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    items: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation-item'
    >;
    localeCode: Attribute.String;
    localizations: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation'
    >;
    name: Attribute.Text & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.UID & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    visible: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PluginNavigationNavigationItem extends Schema.CollectionType {
  collectionName: 'navigations_items';
  info: {
    displayName: 'Navigation Item';
    name: 'navigation-item';
    pluralName: 'navigation-items';
    singularName: 'navigation-item';
  };
  options: {
    comment: 'Navigation Item';
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    additionalFields: Attribute.JSON & Attribute.DefaultTo<{}>;
    audience: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToMany',
      'plugin::navigation.audience'
    >;
    autoSync: Attribute.Boolean & Attribute.DefaultTo<true>;
    collapsed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    externalPath: Attribute.Text;
    master: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'manyToOne',
      'plugin::navigation.navigation'
    >;
    menuAttached: Attribute.Boolean & Attribute.DefaultTo<false>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    parent: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigation-item'
    >;
    path: Attribute.Text;
    related: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigations-items-related'
    >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    type: Attribute.Enumeration<['INTERNAL', 'EXTERNAL', 'WRAPPER']> &
      Attribute.DefaultTo<'INTERNAL'>;
    uiRouterKey: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigationsItemsRelated
  extends Schema.CollectionType {
  collectionName: 'navigations_items_related';
  info: {
    displayName: 'Navigations Items Related';
    name: 'navigations_items_related';
    pluralName: 'navigations-items-relateds';
    singularName: 'navigations-items-related';
  };
  options: {
    increments: true;
    populateCreatorFields: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    field: Attribute.String & Attribute.Required;
    master: Attribute.String & Attribute.Required;
    order: Attribute.Integer & Attribute.Required;
    related_id: Attribute.String & Attribute.Required;
    related_type: Attribute.String & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    displayName: 'actions';
    pluralName: 'actions';
    singularName: 'action';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginReactIconsIconlibrary extends Schema.CollectionType {
  collectionName: 'iconlibrary';
  info: {
    displayName: 'IconLibrary';
    pluralName: 'iconlibraries';
    singularName: 'iconlibrary';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    abbreviation: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    isEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    name: Attribute.String & Attribute.Required;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSitemapSitemap extends Schema.CollectionType {
  collectionName: 'sitemap';
  info: {
    displayName: 'sitemap';
    pluralName: 'sitemaps';
    singularName: 'sitemap';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::sitemap.sitemap',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    delta: Attribute.Integer & Attribute.DefaultTo<1>;
    link_count: Attribute.Integer;
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
    sitemap_string: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['default_hreflang', 'index']> &
      Attribute.DefaultTo<'default_hreflang'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::sitemap.sitemap',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSitemapSitemapCache extends Schema.CollectionType {
  collectionName: 'sitemap_cache';
  info: {
    displayName: 'sitemap-cache';
    pluralName: 'sitemap-caches';
    singularName: 'sitemap-cache';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::sitemap.sitemap-cache',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
    sitemap_id: Attribute.Integer & Attribute.Required;
    sitemap_json: Attribute.JSON & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::sitemap.sitemap-cache',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    displayName: 'slug';
    pluralName: 'slugs';
    singularName: 'slug';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    slug: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiGoogleAuthGoogleCredential
  extends Schema.SingleType {
  collectionName: 'strapi-google-auth_google-credential';
  info: {
    description: 'Stores google project credentials';
    displayName: 'Google Credentials';
    pluralName: 'google-credentials';
    singularName: 'google-credential';
    tableName: 'google_auth_creds';
  };
  options: {
    draftAndPublish: true;
    populateCreatorFields: true;
    privateAttributes: ['id', 'created_at'];
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-google-auth.google-credential',
      'oneToOne',
      'admin::user'
    >;
    google_client_id: Attribute.String & Attribute.Required;
    google_client_secret: Attribute.String & Attribute.Required;
    google_redirect_url: Attribute.String & Attribute.Required;
    google_scopes: Attribute.JSON & Attribute.Required;
    publishedAt: Attribute.DateTime;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::strapi-google-auth.google-credential',
      'oneToOne',
      'admin::user'
    >;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    avatar: Attribute.Media<'images'> & Attribute.Required;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    city: Attribute.String & Attribute.Required;
    company: Attribute.String & Attribute.Required;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    fullname: Attribute.String & Attribute.Required;
    job_title: Attribute.String & Attribute.Required;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    phone: Attribute.String & Attribute.Required;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    sitemap_exclude: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    uuid: Attribute.UID &
      Attribute.Required &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
    verified: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    website: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::banner.banner': ApiBannerBanner;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog.blog': ApiBlogBlog;
      'api::event.event': ApiEventEvent;
      'api::faq.faq': ApiFaqFaq;
      'api::feature.feature': ApiFeatureFeature;
      'api::me.me': ApiMeMe;
      'api::page.page': ApiPagePage;
      'api::portfolio.portfolio': ApiPortfolioPortfolio;
      'api::pricing.pricing': ApiPricingPricing;
      'api::profile-team.profile-team': ApiProfileTeamProfileTeam;
      'api::profile.profile': ApiProfileProfile;
      'api::quick-link.quick-link': ApiQuickLinkQuickLink;
      'api::skill.skill': ApiSkillSkill;
      'api::stack.stack': ApiStackStack;
      'api::stuck.stuck': ApiStuckStuck;
      'api::subscribe.subscribe': ApiSubscribeSubscribe;
      'api::tag.tag': ApiTagTag;
      'api::team.team': ApiTeamTeam;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::ticket.ticket': ApiTicketTicket;
      'api::tool.tool': ApiToolTool;
      'api::tutorial-category.tutorial-category': ApiTutorialCategoryTutorialCategory;
      'api::tutorial.tutorial': ApiTutorialTutorial;
      'api::zidanfath-project.zidanfath-project': ApiZidanfathProjectZidanfathProject;
      'plugin::comments.comment': PluginCommentsComment;
      'plugin::comments.comment-report': PluginCommentsCommentReport;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate;
      'plugin::ezforms.recipient': PluginEzformsRecipient;
      'plugin::ezforms.submission': PluginEzformsSubmission;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::menus.menu': PluginMenusMenu;
      'plugin::menus.menu-item': PluginMenusMenuItem;
      'plugin::navigation.audience': PluginNavigationAudience;
      'plugin::navigation.navigation': PluginNavigationNavigation;
      'plugin::navigation.navigation-item': PluginNavigationNavigationItem;
      'plugin::navigation.navigations-items-related': PluginNavigationNavigationsItemsRelated;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::react-icons.iconlibrary': PluginReactIconsIconlibrary;
      'plugin::sitemap.sitemap': PluginSitemapSitemap;
      'plugin::sitemap.sitemap-cache': PluginSitemapSitemapCache;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::strapi-google-auth.google-credential': PluginStrapiGoogleAuthGoogleCredential;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
