import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { MEDIA_QUERIES, SPACE_PROPERTIES } from '../theme/tokens';

const responsiveProperties = defineProperties({
  conditions: MEDIA_QUERIES,
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    width: SPACE_PROPERTIES,
    height: SPACE_PROPERTIES,
    paddingTop: SPACE_PROPERTIES,
    paddingBottom: SPACE_PROPERTIES,
    paddingLeft: SPACE_PROPERTIES,
    paddingRight: SPACE_PROPERTIES,
    marginTop: SPACE_PROPERTIES,
    marginBottom: SPACE_PROPERTIES,
    marginLeft: SPACE_PROPERTIES,
    marginRight: SPACE_PROPERTIES,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

export const layoutUtilityStyles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type LayoutUtilityStyles = Parameters<typeof layoutUtilityStyles>[0];
