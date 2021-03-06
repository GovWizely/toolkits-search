import React, { Component } from "react";
import _ from "lodash";

const FilterPanel = ({results, heading}) => {
    const items = _.map(results, (item) => {
        const links = _.map(item.links, (link) => {
            return <p key={link.url}><a href={link.url} target="_blank">{link.display_name}</a></p>;
        });
        return (
            <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                {links}
            </div>
        );
    });
    return (
        <div className="results__additional-column__panel">
            <h2>{heading}</h2>
            {items}
        </div>
    );
};

export default FilterPanel;