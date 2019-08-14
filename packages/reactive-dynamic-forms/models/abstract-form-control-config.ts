﻿import { FormControlConfig } from "../services/form-control-config";
import { DynamicFormBuildConfig } from "./interface/dynamic-form-build-config";
import { Input } from "@angular/core";

export abstract class AbstractControlConfig {
    private _controlConfig: FormControlConfig;
    private _dynamicFormBuildConfig: DynamicFormBuildConfig;

    @Input() set controlConfig(value: FormControlConfig) {
        this._controlConfig = value;
    }
    get controlConfig() {
        return this._controlConfig;
    }
    @Input() set dynamicFormBuildConfig(value: DynamicFormBuildConfig) {
        this._dynamicFormBuildConfig = value;
    }

    get dynamicFormBuildConfig() {
        return this._dynamicFormBuildConfig;
    }
}