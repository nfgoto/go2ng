import { Component } from '@angular/core';

interface Config {
    protocol: string;
    domain: string;
    port: number;
}

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    config: Config = {
        protocol: 'http',
        domain: 'localhost',
        port: 3000
    };
}
