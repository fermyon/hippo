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
import { GuidNullableField } from './guidNullableField';
import { ChannelRevisionSelectionStrategyField } from './channelRevisionSelectionStrategyField';
import { StringField } from './stringField';
import { UpdateEnvironmentVariableDtoListField } from './updateEnvironmentVariableDtoListField';

export interface PatchChannelCommand {
    channelId?: string;
    environmentVariables?: UpdateEnvironmentVariableDtoListField;
    name?: StringField;
    domain?: StringField;
    revisionSelectionStrategy?: ChannelRevisionSelectionStrategyField;
    rangeRule?: StringField;
    activeRevisionId?: GuidNullableField;
    certificateId?: GuidNullableField;
}
