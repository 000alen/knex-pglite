import { Knex } from "@000alen/knex";

declare class PGClient extends Knex.Client {
    constructor(config: Knex.Config);

    searchPath: string | undefined | string[];

    _parseVersion(value: string): Promise<unknown>;

    processResponse(obj: unknown, runner: unknown): unknown;
}