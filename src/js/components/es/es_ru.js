import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "../filter_panel";
import Providers from "../providers";

const EnvironmentalSolutionsRu = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="Solution" heading="Provider"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['Environmental Issue']} heading="Environmental Issue" />
                        <FilterPanel results={results['EPA Regulation']} heading="EPA Regulation" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsRu;