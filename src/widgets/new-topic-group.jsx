import React from 'react';
import { FormattedMessage } from 'react-intl';

import AvatarUpload from './avatar-upload.jsx';
import CheckBox from './checkbox.jsx';
import TagManager from './tag-manager.jsx';

import { MAX_TITLE_LENGTH, MAX_TOPIC_DESCRIPTION_LENGTH } from '../config.js';

export default class NewTopicGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.fullName = React.createRef();

    this.state = {
      fullName: '', // full/formatted name
      private: '',
      description: '',
      imageDataUrl: null,
      tags: [],
      isChannel: false
    };

    this.handleFieldEdit = this.handleFieldEdit.bind(this);
    this.handleImageChanged = this.handleImageChanged.bind(this);
    this.handleTagsChanged = this.handleTagsChanged.bind(this);
    this.handleChannelToggle = this.handleChannelToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.fullName.current.focus();
  }

  handleFieldEdit(name, e) {
    this.setState({[name]: e.target.value || ''});
  }

  handleImageChanged(img) {
    this.setState({imageDataUrl: img});
  }

  handleTagsChanged(tags) {
    this.setState({tags: tags});
  }

  handleChannelToggle() {
    this.setState({isChannel: !this.state.isChannel});
  }

  handleSubmit(e) {
    e.preventDefault();

    const fn = this.state.fullName.trim().substring(0, MAX_TITLE_LENGTH);
    const comment = this.state.private.trim().substring(0, MAX_TITLE_LENGTH);
    const description = this.state.description.trim().substring(0, MAX_TOPIC_DESCRIPTION_LENGTH);
    if (fn) {
      this.props.onSubmit(fn, description, this.state.imageDataUrl, comment, this.state.tags, this.state.isChannel);
    }
  }

  render() {
    let submitClasses = 'primary';
    if (this.props.disabled) {
      submitClasses += ' disabled';
    }
    return (
      <form className="panel-form" onSubmit={this.handleSubmit}>
        <div className="panel-form-column">
          <center>
            <AvatarUpload
              tinode={this.props.tinode}
              onError={this.props.onError}
              onImageChanged={this.handleImageChanged} />
          </center>
          <div className="group">
            <label className="small" htmlFor="new-topic-fn">
              <FormattedMessage id="label_topic_name" defaultMessage="Name"
                description="Label for editing topic name" />
            </label>
            <FormattedMessage id="topic_name_editing_placeholder" defaultMessage="Freeform name of the group"
              description="Prompt for entering topic name">{
              (placeholder) => <input type="text" id="new-topic-fn" placeholder={placeholder}
                ref={this.fullName} value={this.state.fullName} onChange={this.handleFieldEdit.bind(this, 'fullName')}
                autoFocus required tabIndex={0} />
            }</FormattedMessage>
          </div>
          <div className="group">
            <label className="small" htmlFor="new-topic-priv">
              <FormattedMessage id="label_private" defaultMessage="Private comment"
                description="Label for editing 'private'" />
            </label>
            <FormattedMessage id="private_editing_placeholder" defaultMessage="Visible to you only"
              description="Placeholder for editing 'private'">{
              (placeholder) => <input type="text" id="new-topic-priv" placeholder={placeholder}
                value={this.state.private} onChange={this.handleFieldEdit.bind(this, 'private')} tabIndex={1} />
            }</FormattedMessage>
          </div>
          <div className="group">
            <label className="small" htmlFor="new-topic-desc">
              <FormattedMessage id="label_description" defaultMessage="Description"
                description="Label for editing topic description" />
            </label>
            <FormattedMessage id="description_editing_placeholder" defaultMessage="Description (optional)"
              description="Placeholder for editing topic description">{
              (placeholder) => <input type="text" id="new-topic-desc" placeholder={placeholder}
                value={this.state.description} onChange={this.handleFieldEdit.bind(this, 'description')} tabIndex={2} />
            }</FormattedMessage>
          </div>
        </div>
        <div className="panel-form-row">
          <CheckBox checked={this.state.isChannel} tabIndex={3} onChange={this.handleChannelToggle} />&nbsp;
          <label onClick={this.handleChannelToggle}><FormattedMessage id="channel_prompt"
            defaultMessage="This is a channel"
            description="Checkbox label when creating a channel" /></label>
        </div>
        <FormattedMessage id="title_tag_manager" defaultMessage="Tags (search & discovery)"
          description="Section title for TagManager">{
          (title) => <TagManager
            tinode={this.props.tinode}
            tags={this.state.tags}
            activated={true}
            onTagsChanged={this.handleTagsChanged}
            tabIndex={4}
            title={title} />
        }</FormattedMessage>
        <div className="dialog-buttons">
          <button className={submitClasses}>
            <FormattedMessage id="button_create" defaultMessage="Create"
              description="Button [Create]" />
          </button>
        </div>
      </form>
    );
  }
};
