var email = {
    name: 'Gmail',
    mailboxes: [
        {
            name: 'Inbox',
            tabs: ['Primary', 'Social', 'Promotions']
        },
        { name: 'Starred' },
        { name: 'Important' },
        { name: 'Trash' }
    ],
    contacts: {
        labels: ['Coworkers', 'Neighbors', 'Family'],
        contacts: [
            {
                name: 'Alexander', starred: true,
                emailAddresses: [
                    { value: '...@gmail.com', type: 'Home' },
                    { value: '...@citadel.edu', type: 'School' }
                ],
                phoneNumbers: [
                    { value: '910...', type: 'Mobile' }
                ],
                addresses: [
                    { value: '...', type: 'Other' }
                ]
            },
            { name: 'Katy', starred: false }
        ]
    }
    //...
}

var mailboxes=[];
email.mailboxes.forEach(function(element) {
    mailboxes.push(element.name);
}, this);
console.log(mailboxes.toString());