export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/mdkapp/Services/testcreateService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mdkapp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/mdkapp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/mdkapp/Actions/CloseModalPage_Cancel.action');
    }
}