import { createAsyncThunk } from "@reduxjs/toolkit";
import { ZoomEvent } from "../../entities/event";
import { IZoomGateway, RootState } from "../../../store/store";


export const loadEvents = createAsyncThunk<ZoomEvent[], void, { state: RootState, extra: IZoomGateway} >(
    "events/loadEvents",
    async ( _input: void, {extra}) => await extra.loadEvents()
);
