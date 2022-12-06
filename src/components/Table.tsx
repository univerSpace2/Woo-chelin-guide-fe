// create table component using daisyui tailwindcss using typescript props

import React from 'react';

interface TableProps {
    tableClassName?: string;
    tableHeadClassName?: string;
    tableBodyClassName?: string;
    header: string[];
    data: string[][];
}

const Table: React.FC<TableProps> = ({tableClassName, tableHeadClassName, tableBodyClassName, header, data}) => {
    return (
        <table className={`table w-full ${tableClassName}`}>
            <thead>
            <tr>
                {header.map((value, index) => (
                    <th key={index} className={`${tableHeadClassName}`}>
                        {value}
                    </th>
                ))}

            </tr>
            </thead>
            <tbody>
            {data.map((value, index) => (
                <tr key={index}>
                    <th>{index+1}</th>
                    {value.map((value, index) => (
                        <td key={index} className={`${tableBodyClassName}`}>
                            {value}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;