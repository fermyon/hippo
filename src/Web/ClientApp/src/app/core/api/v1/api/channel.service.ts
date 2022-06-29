/**
 * Hippo.Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient,
    HttpContext,
    HttpEvent,
    HttpHeaders,
    HttpParameterCodec,
    HttpParams,
    HttpResponse
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { ChannelItem } from '../model/channelItem';
// @ts-ignore
import { ChannelItemPage } from '../model/channelItemPage';
// @ts-ignore
import { CreateChannelCommand } from '../model/createChannelCommand';
// @ts-ignore
import { GetChannelLogsVm } from '../model/getChannelLogsVm';
// @ts-ignore
import { PatchChannelCommand } from '../model/patchChannelCommand';
// @ts-ignore
import { UpdateChannelCommand } from '../model/updateChannelCommand';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
    providedIn: 'root'
})
export class ChannelService {
    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(
        protected httpClient: HttpClient,
        @Optional() @Inject(BASE_PATH) basePath: string,
        @Optional() configuration: Configuration
    ) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder =
            this.configuration.encoder || new CustomHttpParameterCodec();
    }

    private addToHttpParams(
        httpParams: HttpParams,
        value: any,
        key?: string
    ): HttpParams {
        if (typeof value === 'object' && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(
        httpParams: HttpParams,
        value?: any,
        key?: string
    ): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                (value as any[]).forEach(
                    (elem) =>
                        (httpParams = this.addToHttpParamsRecursive(
                            httpParams,
                            elem,
                            key
                        ))
                );
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(
                        key,
                        (value as Date).toISOString().substr(0, 10)
                    );
                } else {
                    throw Error('key may not be null if value is Date');
                }
            } else {
                Object.keys(value).forEach(
                    (k) =>
                        (httpParams = this.addToHttpParamsRecursive(
                            httpParams,
                            value[k],
                            key != null ? `${key}.${k}` : k
                        ))
                );
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error('key may not be null if value is not object or array');
        }
        return httpParams;
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelExportGet(
        observe?: 'body',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any>;
    public apiChannelExportGet(
        observe?: 'response',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpResponse<any>>;
    public apiChannelExportGet(
        observe?: 'events',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpEvent<any>>;
    public apiChannelExportGet(
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any> {
        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<any>(
            `${this.configuration.basePath}/api/channel/export`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param searchText
     * @param pageIndex
     * @param pageSize
     * @param sortBy
     * @param isSortedAscending
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelGet(
        searchText?: string,
        pageIndex?: number,
        pageSize?: number,
        sortBy?: string,
        isSortedAscending?: boolean,
        observe?: 'body',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<ChannelItemPage>;
    public apiChannelGet(
        searchText?: string,
        pageIndex?: number,
        pageSize?: number,
        sortBy?: string,
        isSortedAscending?: boolean,
        observe?: 'response',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpResponse<ChannelItemPage>>;
    public apiChannelGet(
        searchText?: string,
        pageIndex?: number,
        pageSize?: number,
        sortBy?: string,
        isSortedAscending?: boolean,
        observe?: 'events',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpEvent<ChannelItemPage>>;
    public apiChannelGet(
        searchText?: string,
        pageIndex?: number,
        pageSize?: number,
        sortBy?: string,
        isSortedAscending?: boolean,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<any> {
        let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
        if (searchText !== undefined && searchText !== null) {
            localVarQueryParameters = this.addToHttpParams(
                localVarQueryParameters,
                <any>searchText,
                'searchText'
            );
        }
        if (pageIndex !== undefined && pageIndex !== null) {
            localVarQueryParameters = this.addToHttpParams(
                localVarQueryParameters,
                <any>pageIndex,
                'pageIndex'
            );
        }
        if (pageSize !== undefined && pageSize !== null) {
            localVarQueryParameters = this.addToHttpParams(
                localVarQueryParameters,
                <any>pageSize,
                'pageSize'
            );
        }
        if (sortBy !== undefined && sortBy !== null) {
            localVarQueryParameters = this.addToHttpParams(
                localVarQueryParameters,
                <any>sortBy,
                'sortBy'
            );
        }
        if (isSortedAscending !== undefined && isSortedAscending !== null) {
            localVarQueryParameters = this.addToHttpParams(
                localVarQueryParameters,
                <any>isSortedAscending,
                'IsSortedAscending'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'text/plain',
                'application/json',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<ChannelItemPage>(
            `${this.configuration.basePath}/api/channel`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelIdDelete(
        id: string,
        observe?: 'body',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any>;
    public apiChannelIdDelete(
        id: string,
        observe?: 'response',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpResponse<any>>;
    public apiChannelIdDelete(
        id: string,
        observe?: 'events',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpEvent<any>>;
    public apiChannelIdDelete(
        id: string,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling apiChannelIdDelete.'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.delete<any>(
            `${this.configuration.basePath}/api/channel/${encodeURIComponent(
                String(id)
            )}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelIdGet(
        id: string,
        observe?: 'body',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<ChannelItem>;
    public apiChannelIdGet(
        id: string,
        observe?: 'response',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpResponse<ChannelItem>>;
    public apiChannelIdGet(
        id: string,
        observe?: 'events',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpEvent<ChannelItem>>;
    public apiChannelIdGet(
        id: string,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling apiChannelIdGet.'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'text/plain',
                'application/json',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<ChannelItem>(
            `${this.configuration.basePath}/api/channel/${encodeURIComponent(
                String(id)
            )}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id
     * @param patchChannelCommand
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelIdPatch(
        id: string,
        patchChannelCommand?: PatchChannelCommand,
        observe?: 'body',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any>;
    public apiChannelIdPatch(
        id: string,
        patchChannelCommand?: PatchChannelCommand,
        observe?: 'response',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpResponse<any>>;
    public apiChannelIdPatch(
        id: string,
        patchChannelCommand?: PatchChannelCommand,
        observe?: 'events',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpEvent<any>>;
    public apiChannelIdPatch(
        id: string,
        patchChannelCommand?: PatchChannelCommand,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling apiChannelIdPatch.'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined =
            this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Content-Type',
                httpContentTypeSelected
            );
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.patch<any>(
            `${this.configuration.basePath}/api/channel/${encodeURIComponent(
                String(id)
            )}`,
            patchChannelCommand,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id
     * @param updateChannelCommand
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelIdPut(
        id: string,
        updateChannelCommand?: UpdateChannelCommand,
        observe?: 'body',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any>;
    public apiChannelIdPut(
        id: string,
        updateChannelCommand?: UpdateChannelCommand,
        observe?: 'response',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpResponse<any>>;
    public apiChannelIdPut(
        id: string,
        updateChannelCommand?: UpdateChannelCommand,
        observe?: 'events',
        reportProgress?: boolean,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<HttpEvent<any>>;
    public apiChannelIdPut(
        id: string,
        updateChannelCommand?: UpdateChannelCommand,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: { httpHeaderAccept?: undefined; context?: HttpContext }
    ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling apiChannelIdPut.'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined =
            this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Content-Type',
                httpContentTypeSelected
            );
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.put<any>(
            `${this.configuration.basePath}/api/channel/${encodeURIComponent(
                String(id)
            )}`,
            updateChannelCommand,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelLogsIdGet(
        id: string,
        observe?: 'body',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<GetChannelLogsVm>;
    public apiChannelLogsIdGet(
        id: string,
        observe?: 'response',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpResponse<GetChannelLogsVm>>;
    public apiChannelLogsIdGet(
        id: string,
        observe?: 'events',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpEvent<GetChannelLogsVm>>;
    public apiChannelLogsIdGet(
        id: string,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling apiChannelLogsIdGet.'
            );
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'text/plain',
                'application/json',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<GetChannelLogsVm>(
            `${
                this.configuration.basePath
            }/api/channel/logs/${encodeURIComponent(String(id))}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param createChannelCommand
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiChannelPost(
        createChannelCommand?: CreateChannelCommand,
        observe?: 'body',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<string>;
    public apiChannelPost(
        createChannelCommand?: CreateChannelCommand,
        observe?: 'response',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpResponse<string>>;
    public apiChannelPost(
        createChannelCommand?: CreateChannelCommand,
        observe?: 'events',
        reportProgress?: boolean,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<HttpEvent<string>>;
    public apiChannelPost(
        createChannelCommand?: CreateChannelCommand,
        observe: any = 'body',
        reportProgress: boolean = false,
        options?: {
            httpHeaderAccept?: 'text/plain' | 'application/json' | 'text/json';
            context?: HttpContext;
        }
    ): Observable<any> {
        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Bearer) required
        localVarCredential = this.configuration.lookupCredential('Bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set(
                'Authorization',
                localVarCredential
            );
        }

        let localVarHttpHeaderAcceptSelected: string | undefined =
            options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'text/plain',
                'application/json',
                'text/json'
            ];
            localVarHttpHeaderAcceptSelected =
                this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Accept',
                localVarHttpHeaderAcceptSelected
            );
        }

        let localVarHttpContext: HttpContext | undefined =
            options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined =
            this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set(
                'Content-Type',
                httpContentTypeSelected
            );
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (
                this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
            ) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.post<string>(
            `${this.configuration.basePath}/api/channel`,
            createChannelCommand,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
