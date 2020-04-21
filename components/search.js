import React from "react";
import { withRouter } from "next/router";
import qs from "qs";
import debounce from "debounce";
import { UserLocationContext } from "./user-location";
import styles from "./search.module.css";
import { sanitize } from "./utils/sanitize";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    let [path, querystring] = props.router.asPath.split("?");
    let term = qs.parse(querystring).term;
    this.state = {
      term: sanitize(term),
    };
    if (term != this.state.term) {
      props.router.replace(path + "?term=" + this.state.term);
    }

    this.search = this.search.bind(this);
    this.replace = debounce(this.replace.bind(this), 300);
  }

  search(event) {
    event.preventDefault();
    event.stopPropagation();
    let node = event.target;
    const value = sanitize(node.value);
    this.setState({ term: value });
    this.replace(value);
  }

  replace(value) {
    let pathname = this.props.router.pathname;
    if (value) {
      if (pathname != "/search") {
        this.props.router.push(`/search?term=` + value);
      } else {
        this.props.router.replace(`/search?term=` + value);
      }
    } else {
      this.props.router.replace(pathname);
    }
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <UserLocationContext.Consumer>
        {(location) => (
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              name="term"
              placeholder={"Search places"}
              value={this.state.term}
              ref={this.inputRef}
              onChange={this.search}
            ></input>
            <span className={styles.submit}>&#x26B2;</span>
            <div className={styles.location}>
              near <em>{location.display}</em>
            </div>
          </div>
        )}
      </UserLocationContext.Consumer>
    );
  }
}

export default withRouter(Search);
