import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    desc: Attribute.Text;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    position: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience.experience': ExperienceExperience;
      'hero.hero': HeroHero;
      'product.product': ProductProduct;
      'service.service': ServiceService;
      'team.team': TeamTeam;
    }
  }
}
