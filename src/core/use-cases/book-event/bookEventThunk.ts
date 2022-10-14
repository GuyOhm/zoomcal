import { createAsyncThunk } from "@reduxjs/toolkit";
import { ZoomEvent } from "../../entities/event";
import { IZoomGateway, RootState } from "../../../store/store";


export const bookEvent = createAsyncThunk<ZoomEvent, ZoomEvent, { state: RootState, extra: IZoomGateway} >(
    "events/bookEvent",
    async ( input: ZoomEvent, {extra}) => await extra.bookEvent(input)
    );
