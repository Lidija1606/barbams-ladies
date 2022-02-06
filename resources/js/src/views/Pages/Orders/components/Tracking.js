import { Input, Button } from "reactstrap";
import styled from "styled-components";
import React, { useState, useRef } from "react";
//import Popover from "@material-ui/core/Popover";

// const PopoverContent = styled.div`
//     padding: 20px;
// `;

const StyledButton = styled(Button)`
    margin-top: 10px;
    margin-right: 10px;
`;

const StyledDiv = styled.div`
    width: 150px;
`;

export const Tracking = ({ value, orderId, updateTracking }) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [disabled, setDisabled] = useState(!!value);
    //const [popoverOpen, setPopoverOpen] = useState(false);
    //const [anchorEl, setAnchorEl] = React.useState(null);
    const handleSaveClick = event => {
        updateTracking(orderId, inputValue);
        setDisabled(true);
    };
    const handleCancelClick = () => {
        setInputValue(value);
    };
    // const notifyClient = () => {
    //     setDisabled(true);
    //     setPopoverOpen(false);
    // };
    return (
        <StyledDiv>
            <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                disabled={disabled}
            />
            {!disabled && (
                <StyledButton onClick={handleSaveClick}>Save</StyledButton>
            )}
            {!disabled && (
                <StyledButton onClick={handleCancelClick}>Cancel</StyledButton>
            )}
            {/* <Popover
                open={popoverOpen}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
            >
                <PopoverContent>
                    <h3>Do you want to notify the client?</h3>
                    <StyledButton onClick={notifyClient}>Yes</StyledButton>
                    <StyledButton onClick={notifyClient}>No</StyledButton>
                </PopoverContent>
            </Popover> */}
        </StyledDiv>
    );
};
