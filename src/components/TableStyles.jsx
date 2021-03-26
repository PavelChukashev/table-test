import styled from 'styled-components'

export const Styles = styled.div`
.table {
    height: 75vh;
    margin-top: 30px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 4px black;

.tr {
    :last-child {
        .td {
            border-bottom: 0;
        }
    }
}

.globalFilter span input {
    outline: none;
    border: none;
}

.th,
.td {
    padding: 5px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden;

    :last-child {
    border-right: 0;
    }
}

&.sticky {
    overflow: scroll;
    .header,
    .footer {
    position: sticky;
    z-index: 1;
    width: fit-content;
}

.header {
top: 0;
box-shadow: 0px 3px 3px #ccc;
}

    .footer {
    bottom: 0;
    box-shadow: 0px -3px 3px #ccc;
    }

    .body {
    position: relative;
    z-index: 0;
    }

    [data-sticky-td] {
    position: sticky;
    }

    [data-sticky-last-left-td] {
    box-shadow: 2px 0px 3px #ccc;
    }

    [data-sticky-first-right-td] {
    box-shadow: -2px 0px 3px #ccc;
    }
    }
}
`;