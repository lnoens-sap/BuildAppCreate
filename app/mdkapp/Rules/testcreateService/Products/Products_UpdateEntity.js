export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/mdkapp/Services/testcreateService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mdkapp/Actions/testcreateService/Products/Products_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/mdkapp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/mdkapp/Actions/testcreateService/Products/Products_UpdateEntity.action');
    }
}