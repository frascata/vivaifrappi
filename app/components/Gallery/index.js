import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const {images} = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <div key={i}>
          <div className="uk-card uk-card-default uk-card-hover uk-text-center" >
            <div className="uk-inline-clip uk-transition-toggle uk-light"
                 onClick={(e) => this.openLightbox(i, e)}>
              <img src={obj.thumbnail} alt=""/>
              <div
                className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">
                  <span data-uk-icon="icon: search; ratio: 1.5"
                        className="color-primary"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match uk-grid-medium" data-uk-grid>
        {gallery}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          imageCountSeparator={' / '}
        />
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
