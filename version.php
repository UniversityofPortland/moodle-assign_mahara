<?php

$plugin->cron = 60;
$plugin->version = 2013061200;
$plugin->requires = 2012062500;
$plugin->component = 'assignsubmission_mahara';

$plugin->dependencies = array(
    'local_mahara' => ANY_VERSION
);
