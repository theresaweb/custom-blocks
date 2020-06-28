const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;

import './editor.scss';
import './style.scss';


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/qa-repeater-block', {
	title: __( 'QA Block' ),
	icon: 'nametag',
	category: 'common',
	keywords: [
		__( 'custom-header-block' ),
	],
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  },
  edit({ attributes, className, setAttributes }) {
    const getImageButton = (openEvent) => {
    if(attributes.imageUrl) {
      return (
        <img
          src={ attributes.imageUrl }
          onClick={ openEvent }
          className="image"
        />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ openEvent }
            className="button button-large"
          >
            Pick an image
          </Button>
        </div>
      );
    }
  };
    return (
      <div className="container">
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
        />
        <div className="header-info">
          <PlainText
            onChange={ content => setAttributes({ title: content }) }
            value={ attributes.title }
            placeholder="Your card title"
            className="heading"
          />
          <RichText
            onChange={ content => setAttributes({ body: content }) }
            value={ attributes.body }
            multiline="p"
            placeholder="Your card text"
          />
        </div>
      </div>
    );
  },
  save({ attributes }) {

    const cardImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="card__image"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="card">
        { cardImage(attributes.imageUrl, attributes.imageAlt) }
        <div className="card__content">
          <h3 className="card__title">{ attributes.title }</h3>
          <div className="card__body">
            { attributes.body }
          </div>
        </div>
      </div>
    );
  }
} );
