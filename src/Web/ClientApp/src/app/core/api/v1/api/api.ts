export * from './account.service';
import { AccountService } from './account.service';
export * from './app.service';
import { AppService } from './app.service';
export * from './certificate.service';
import { CertificateService } from './certificate.service';
export * from './channel.service';
import { ChannelService } from './channel.service';
export * from './environmentVariable.service';
import { EnvironmentVariableService } from './environmentVariable.service';
export * from './jobStatus.service';
import { JobStatusService } from './jobStatus.service';
export * from './revision.service';
import { RevisionService } from './revision.service';
export * from './storage.service';
import { StorageService } from './storage.service';
export const APIS = [
    AccountService,
    AppService,
    CertificateService,
    ChannelService,
    EnvironmentVariableService,
    JobStatusService,
    RevisionService,
    StorageService
];
