import React from 'react';

export default function(props) {
    return (
        <div>
            <h2>elderon Detail for {props.match.params.slug}</h2>
        </div>
    );
}