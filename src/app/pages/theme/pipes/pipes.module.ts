import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPipe} from './pagination/pagination.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import {HostSearchPipe} from './search/host-search.pipe';
import { HostUptimePipePipe } from './units/host-uptime-pipe.pipe';
import { FileSizePipePipe } from './units/file-size-pipe.pipe';
import {MemeorySizePipePipe} from './units/memeory-size-pipe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        HostSearchPipe,
        HostUptimePipePipe,
        FileSizePipePipe,
        MemeorySizePipePipe
    ],
    exports: [
        PaginationPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        HostSearchPipe,
        HostUptimePipePipe,
        FileSizePipePipe,
        MemeorySizePipePipe
    ]
})
export class PipesModule { }
