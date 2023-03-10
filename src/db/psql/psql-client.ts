import * as postgres from 'postgres';

export class PsqlClient {
  protected readonly psqlClient = postgres(
    `postgres://${process.env.WGD_PSQL_USER}:${process.env.WGD_PSQL_PW}@127.0.0.1:5432/wgd_events`,
  );
}
