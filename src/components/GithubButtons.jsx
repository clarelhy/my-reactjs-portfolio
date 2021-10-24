/**
 * GithubButtons.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file GithubButtons component for to link user to Github
 */

import React from "react";
import GitHubButton from "react-github-btn";

export const GithubButtons = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/clarelhy/portfolio-reactjs-frontend/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork clarelhy/portfolio-reactjs-frontend on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/clarelhy/portfolio-reactjs-frontend"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star clarelhy/portfolio-reactjs-frontend on GitHub"
    >
      Star
    </GitHubButton>
  </>
);
