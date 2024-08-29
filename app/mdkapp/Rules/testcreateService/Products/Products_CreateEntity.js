export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/mdkapp/Services/testcreateService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mdkapp/Actions/testcreateService/Products/Products_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/mdkapp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/mdkapp/Actions/testcreateService/Products/Products_CreateEntity.action');
    }
}