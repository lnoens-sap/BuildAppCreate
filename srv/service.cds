using { testcreatens as my } from '../db/schema.cds';

@path : '/service/testcreateService'
service testcreateService
{
    @odata.draft.enabled
    @odata.draft.bypass
    entity Products as
        projection on my.Products;
}

annotate testcreateService with @requires :
[
    'authenticated-user'
];
