package com.events.eventsapp.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class EventCategoryModel implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "event_category_id")
	private Long id;

	@Column(name = "event_category_name", unique = true)
	private String name;

	@ManyToMany(mappedBy = "eventCategoryModels")
	private Set<EventModel> eventModel;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<EventModel> getEventModel() {
		return eventModel;
	}

	public void setEventModel(Set<EventModel> eventModel) {
		this.eventModel = eventModel;
	}
}
