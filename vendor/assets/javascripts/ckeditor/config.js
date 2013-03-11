CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    config.width = '600';
    config.height = '200';
    config.toolbar_Pure = [
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
        }, {
            name: 'paragraph',
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        }, {
            name: 'links',
            items: ['Link', 'Image', 'Smiley', 'SpecialChar']
        }
    ];
    config.toolbar = 'Pure';
    return true;
};
