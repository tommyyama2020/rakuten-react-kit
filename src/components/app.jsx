/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

// @flow

import * as React from "react";

import { List } from "components/list";

import type { State } from "domain/store/state/main";
import { onChangeIncrementalSearch } from "domain/middleware/user";

// Define App as an importable function
export function App({ state } :
                    { state: State} ) {

  // Select your props from the state
  const text = "hello";
  const currentPageName = state.currentPage.name;
  const list = state.list;

  function onChangeText(event: { target: { value: string } }) {
    const value = event.target.value;
    onChangeIncrementalSearch(value);
  }

  // Define a 'content' variable which outputs content
  // according to the page routed to.
  const content = ((pageName) => {
    switch (pageName) {
      case "LIST_PAGE":
        return <List list={list} />;
      default:
        return(
          <div>
            <p> Rakuten says {text} </p>
            <div>
              <input
                type="text"
                onChange={event => onChangeText(event)}
                placeholder="Search by name"
              />
            </div>
            <List list={list} />
          </div>
        );
    }
  })(currentPageName);


  // Return the component structure in HTML
  return (
    <div>
      { content }
    </div>
  );
}

/*
 * EOF: src/components/app.jsx
 */
