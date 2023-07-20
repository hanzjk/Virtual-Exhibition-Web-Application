package org.ve.ticket.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Exhibition {
    private String id;
    private String exhibitionName;
    private String exhibitionOwnerId;
    private String exhibitionId;
    private boolean start;
    private boolean isOver;
    private String datetime;

    private int ticketPrice;
}
