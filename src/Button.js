/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom/megadraft-playbuzz-plugin/blob/master/README.md)
 *
 * License: MIT
 */

import React, {Component} from "react";

import Icon from "./icon.js";
import constants from "./constants";
import {insertDataBlock} from "megadraft";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      type: constants.PLUGIN_TYPE,
      caption: "Initial plugin text"
    };

    this.props.onChange(insertDataBlock(this.props.editorState, data));
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick} title={constants.PLUGIN_NAME}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}
