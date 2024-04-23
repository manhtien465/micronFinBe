import type { Schema, Attribute } from '@strapi/strapi';

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
      'product.product': ProductProduct;
      'service.service': ServiceService;
      'team.team': TeamTeam;
    }
  }
}
