import React from 'react';

export const SimpleHeader = () => (
  <div className="position-relative js-header-wrapper ">
      <div className="header header-logged-out width-full pt-5 pb-4" role="banner">
          <div className="container clearfix width-full text-center">
              <div className="CircleBadge CircleBadge--medium mx-auto icon-circle-badge-bg">
                  <a className="header-logo" href="https://gitaction.com/">
                      <img className="CircleBadge-icon" alt="GitAction dev logo" width="100" height="100"
                           src="https://avatars2.githubusercontent.com/oa/1315854?s=120&amp;u=bcfcbc764c1cd783c18a6dbebc6c3fcfd0c80db4&amp;v=4"/>
                  </a>
              </div>
          </div>
      </div>
  </div>
);
