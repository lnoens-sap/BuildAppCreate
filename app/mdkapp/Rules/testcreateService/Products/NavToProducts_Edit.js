export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/mdkapp/Services/testcreateService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mdkapp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/mdkapp/Actions/testcreateService/Products/NavToProducts_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/mdkapp/Actions/testcreateService/Products/NavToProducts_Edit.action');
    }
}