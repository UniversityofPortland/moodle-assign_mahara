<?php

$plugin->cron = 60;
$plugin->version = 2013061200;
$plugin->requires = 2012062500;
$plugin->release = '1.0rc (Build: 2013061200)';
$plugin->maturity = MATURITY_RC;
$plugin->component = 'assignsubmission_mahara';

$plugin->dependencies = array(
    'local_mahara' => ANY_VERSION
);
