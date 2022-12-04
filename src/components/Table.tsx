// create table component using daisyui tailwindcss using typescript props

import React from 'react';

interface TableProps {
    className?: string;
    header: string[];
    data: any[];
}

const Table: React.FC<TableProps> = ({ className, header, data }) => {
    return (
        <div className={`table w-full ${className}`}>
            <div className="table-row-group">
                <div className="table-row">
                    {header.map((value, index) => (
                        <div className="table-cell" key={index}>
                            {value}
                        </div>
                    ))}
                </div>
                {data.map((value, index) => (
                    <div className="table-row" key={index}>
                        {Object.keys(value).map((key, index) => (
                            <div className="table-cell" key={index}>
                                {value[key]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;